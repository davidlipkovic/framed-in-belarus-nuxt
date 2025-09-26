export function useRemoveNull() {
  const removeNullProps = (data) => {
    return Object.keys(data)
    .filter((key) => data[key] != null)
    .reduce((a, key) => ({ ...a, [key]: data[key] }), {})
  }

  const removeNullItems = (data) => {
    return data.reduce((acc, item) => {
      if (item) {
        if (typeof item === 'object') {
          if (Object.keys(item).length > 0) {
            acc.push(item)
          }
        } else {
          acc.push(item)
        }
      }

      return acc
    }, [])
  }

  return {
    removeNullProps,
    removeNullItems,
  }
}
