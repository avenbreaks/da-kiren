import { FC, ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PlacesType } from 'react-tooltip'
import Tooltip from '../ToolTip/Tooltip'

export interface DisabledTooltipProps {
  children: ReactNode
  className?: string
  place?: PlacesType
}

const DisabledTooltip: FC<DisabledTooltipProps> = ({ children, place, className }) => {
  const { t } = useTranslation()

  const [isReady, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [isReady])

  return isReady ? (
    <Tooltip
      className={className}
      place={place as PlacesType}
      text={t('comingSoon')}
      id={Math.random().toString()}
    >
      <div className='opacity-20 pointer-events-none'>{children}</div>
    </Tooltip>
  ) : (
    children
  )
}

export default DisabledTooltip
