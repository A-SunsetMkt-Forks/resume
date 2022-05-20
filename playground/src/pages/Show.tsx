import { Resume } from '@resumejs/components'
import useResume from '../hooks/useResume'

export const Show = () => {
  const [resume] = useResume()
  return (
    <div className="show-resume">
      <Resume>{resume || ''}</Resume>
    </div>
  )
}
