import { RootOrganism } from '@/components/organism/root'
import { HeaderOrganism } from '@/components/organism/header'
import { useTranslation } from "react-i18next"

export function NotfoundTemplate() {
  const { t } = useTranslation()

  return (
    <RootOrganism className="flex flex-col justify-center items-center px-6 gap-5">
      <HeaderOrganism fixed />
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">404</h2>
        <h1 className="text-md">{t("components.template.notfound.title")}</h1>
      </div>
    </RootOrganism>
  )
}
