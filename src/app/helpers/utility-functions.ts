export function SerializeQuery(
  params: { [x: string]: any; constructor?: any },
  prefix: string
) {
  const query: any = Object.keys(params).map((key) => {
    const value = params[key];

    if (params.constructor === Array) key = `${prefix}[]`;
    else if (params.constructor === Object)
      key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === 'object') return SerializeQuery(value, key);
    else return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join('&');
}

export function Options() {
  var options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    },
  };
  return options;
}
