import Image from 'next/image'
import '@/common/string.extensions'
import variables from '@/app/variables.module.scss'
import { useSelector } from 'react-redux'
import { State } from '../../../lib/store'

import noImage from '@/images/no-image.png'
import { classNames } from '@/common/classNames'

export const Card = ({
  title,
  mediaURI = '',
  description = '',
  actions = [],
  status = '',
}: {
  title: string
  mediaURI?: string
  description?: string
  actions?: string[]
  status?: string
}) => {
  const bookView = useSelector((state: State) => state.bookView.value)

  return (
    <div className="indicator w-auto">
      {status && (
        <span
          className="indicator-item badge"
          style={{ backgroundColor: variables[status.toCSSClass()] }}
        ></span>
      )}

      <div
        className={classNames(
          'card w-full bg-neutral shadow-xl',
          bookView === 'list' && 'card-side',
        )}
      >
        <figure>
          <Image
            className={classNames(
              'object-contain',
              bookView === 'list' && 'h-52 w-auto',
            )}
            src={mediaURI ? mediaURI : noImage.src}
            width={128}
            height={182}
            alt={title}
          />
        </figure>

        <div
          className={classNames(
            'card-body text-pretty ',
            bookView === 'list' && 'grow shrink basis-full',
          )}
        >
          <h2 className="card-title">{title.toCapitalize()}</h2>
          <p
            className={classNames(
              'pt-1 text-neutral-content line-clamp-3 ',
              bookView === 'grid' && 'hidden',
            )}
          >
            {description}
          </p>

          <div className="card-actions justify-end">
            {bookView === 'list' &&
              actions.map((action) => (
                <button
                  key={action}
                  className="badge badge-outline"
                  style={{ borderColor: variables[action.toCSSClass()] }}
                >
                  {action.toCapitalize()}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
