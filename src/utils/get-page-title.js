import defaultSettings from '@/settings'

const title = defaultSettings.title || 'm-links-web'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
