import { useRoute } from 'vue-router'

export function useCheckCurrentRoute() {
  const route = useRoute()

  const checkCurrentRoute = (path) => route.path.includes(path)
  const checkHomeRoute = () => route.name.includes('index')

  return {
    checkCurrentRoute,
    checkHomeRoute
  };
}