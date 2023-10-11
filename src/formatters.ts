export function xmlDateFormatter(date?: Date) {
  return date && date.toISOString();
}

export function xmlYesNoFormatter(val?: boolean) {
  return val ? "yes" : "no";
}

export function xmlFixedNumberFormatBuilder(precision: number) {
  return (value: number) => !Number.isNaN(value) && value.toFixed(precision);
}

export function xmlCustomLabelsFormatter(
  item: any,
  _map: any,
  root: Record<string, string>,
) {
  for (let i = 0; i < 5; i += 1) {
    if (item[i] !== undefined) {
      // eslint-disable-next-line no-param-reassign
      root[`g:custom_label_${i}`] = item[i];
    }
  }
}

export function xmlSingleItemProcessor(
  prop: string,
  map: Record<string, any>,
  root: Record<string, string>,
) {
  if (map.xmlFormatter) {
    return map.xmlFormatter(prop, map.items, root);
  }

  return prop;
}

export function xmlObjectFormatter(
  contents: Record<string, any>,
  map: Record<string, any>,
) {
  const item = {} as Record<string, any>;

  Object.keys(map).forEach((p) => {
    if (contents[p] !== undefined) {
      let result;
      if (Array.isArray(contents[p]) && map[p].allowRepeat) {
        result = contents[p].map((s: any) =>
          xmlSingleItemProcessor(s, map[p], item),
        );
      } else {
        result = xmlSingleItemProcessor(contents[p], map[p], item);
      }

      if (map[p].xmlName && result !== undefined) {
        item[map[p].xmlName] = result;
      }
    }
  });

  return item;
}
