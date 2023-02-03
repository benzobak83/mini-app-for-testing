import React, { FC, useState, useEffect } from 'react'

import avatar from '../../../../public/img/avatar.png'

const ProductAvatar: FC = () => {
  const [srcAvatar, setSrcAvatar] = useState<string | null>(null)

  useEffect(() => {
    setSrcAvatar(avatar)
  }, [])
  return (
    <div className="product__avatar avatar">
      <div className="avatar__inner">
        <img src={srcAvatar as string} alt="avatar" className="avatar__img" />
      </div>
    </div>
  )
}

export { ProductAvatar }
