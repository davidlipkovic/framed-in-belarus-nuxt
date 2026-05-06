import { defineSitemapEventHandler, asSitemapUrl } from '#imports'

const mapUrls = (route, data) => {
  return data.map((item) =>
    asSitemapUrl({
      loc: `${route}/${item.id}`,
      changefreq: 'monthly',
      priority: 0.7,
      _i18nTransform: true,
    })
  )
}

export default defineSitemapEventHandler(async () => {
  const embroideriesResponse = await $fetch('https://d2wpukog48e17c.cloudfront.net/api/prisoners/gallery')
  const eventsResponse = await $fetch('https://d2wpukog48e17c.cloudfront.net/api/news')

  const embroideriesUrls = mapUrls('/Gallery/Embroidery', embroideriesResponse.result)
  const eventsUrls = mapUrls('/Events/Article', eventsResponse.result)

  return [
    ...embroideriesUrls,
    ...eventsUrls,
  ]
})
