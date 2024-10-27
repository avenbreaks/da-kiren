import { FC } from 'react'
import Siren from '../../assets/images/siren.svg'
import HealthMetric, { HealthMetricProps } from './HealthMetric'

export interface FootBarProps extends HealthMetricProps {}

const FootBar: FC<FootBarProps> = (props) => {
  return (
    <div className='w-full h-11 dark:bg-dark900 border border-l-0 dark:border-dark800 border-dark200 flex justify-between'>
      <div className='hidden md:flex space-x-2 items-center dark:text-white px-3 dark:bg-darkFull'>
        <Siren />
      </div>
      <div className='flex items-center space-x-4 w-max'>
        <HealthMetric {...props} />
      </div>
    </div>
  )
}

export default FootBar
