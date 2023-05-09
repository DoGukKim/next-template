import { ComponentProps, forwardRef } from 'react'

import Menu from 'components/Menu'
import { useIsOpen, useTrigger } from './context/consumer'

type DropdownContentProps = ComponentProps<typeof Menu.Content>

const CONTENT_NAME = 'DropdownContent'

const Content = forwardRef<HTMLElement, DropdownContentProps>(
  ({ children, ...dropdownContentProps }, forwardedRef) => {
    const isOpen = useIsOpen()
    const { triggerId } = useTrigger()

    return (
      <>
        {isOpen && (
          <Menu.Content
            aria-labelledby={triggerId}
            direction="column"
            ref={forwardedRef}
            {...dropdownContentProps}
          >
            {children}
          </Menu.Content>
        )}
      </>
    )
  }
)

Content.displayName = CONTENT_NAME

export default Content
