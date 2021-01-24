import * as React from 'react'

export interface Props {
  /** The user's name */
  name: string
  /** Should the name be rendered in bold */
  priority?: boolean
}

const PrintName: React.FC<Props> = (props) => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? 'bold' : 'normal' }}>
        {props.name}
      </p>
    </div>
  )
}

const ShowUser: React.FC<Props> = (props) => {
  return <PrintName name='Ned' />
}

export { PrintName, ShowUser }
