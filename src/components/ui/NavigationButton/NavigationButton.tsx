import { Form, Overlay, Popover } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import React, { PropsWithChildren, ReactElement, ReactNode, ReactNodeArray, useRef, useState } from "react";
import HashLink from "../../layout/HashLink"
import ScrollableContainer from "./../ScrollableContainer"
import ConditionalWrapper from "./../ConditionalWrapper"
import styles  from "./NavigationButton.module.scss"
import LoadingSpinner from "./../loading/LoadingSpinner"
import { useTranslation } from "react-i18next"
import TextLoading from "./../loading/TextLoading"

export interface NavigationButtonProps {
  id?: string
  text?: string
  loading?: boolean
  textLoading?: boolean
  icon: IconDefinition
  width?: number
  textPlacement?: "bottom" | "left" | "right"
  className?: string
  containerClass?: string
  menuClass?: string
  iconClass?: string
  textClass?: string
  disabled?: boolean
  disableDropdown?: boolean
  href?: string
  searchable?: boolean
  showItemQuantity?: number
  onClick?: () => void
  onShow?: () => void
  onHide?: () => void
}

export interface ItemProps {
  id?: string
  icon?: IconDefinition
  containerClass?: string
  iconClass?: string
  className?: string
  href?: string
  style?: object
  onClick?: (value: string) => void
}

const Item = (props: PropsWithChildren<ItemProps>) => {
  const { id, icon, containerClass, iconClass, className, href, style, onClick, children } = props

  const handleClick = () => {
    onClick?.(children as string)
  }

  const linkClassName = [className, styles.item].join(" ")
  const key = children?.toString()

  return (
    <div className={[styles.itemWrapper, containerClass].join(" ")} key={`${key}-wrapper`}>
      {icon && (
        <FontAwesomeIcon
          fixedWidth
          icon={icon}
          key={`${key}-icon`}
          className={[styles.itemIcon, iconClass].join(" ")}
        />
      )}

      <HashLink path={href} onClick={handleClick} className={linkClassName} style={style} key={key} data-testid={id}>
        {children}
      </HashLink>
    </div>
  )
}

const NavigationButton = (props: PropsWithChildren<NavigationButtonProps>) => {
  const {
    text,
    icon,
    width,
    textPlacement,
    className,
    iconClass,
    textClass,
    disabled,
    disableDropdown,
    id,
    href,
    searchable,
    showItemQuantity,
    containerClass,
    loading,
    textLoading,
    onClick,
    onShow,
    onHide,
    children
  } = props

  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("")
  const [expandSearch, setExpandSearch] = useState(false)
  const ref = useRef(null)
  const targetRef = useRef(null)

  const handleClick = () => {
    if (!disableDropdown) {
      setShow(!show)
      if (!show) {
        onShow?.()
      }
    } else {
      onClick?.()
    }
  }

  const handleHide = () => {
    onHide?.()
    setShow(false)
  }

  const handleExited = () => {
    setSearch("")
    setExpandSearch(false)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setSearch(search)
    if (!search) {
      setExpandSearch(false)
    }
  }

  const linkClassName = [className, styles.link].join(" ")
  const isLeft = textPlacement && textPlacement === "left"
  const isRight = textPlacement && textPlacement === "right"
  const textClasses = [textClass, show ? styles.active : "", styles.text]
  const iconClasses = [iconClass, show ? styles.active : "", styles.icon].join(" ")

  return (
    <div ref={ref} className={[styles.container, containerClass].join(" ")}>
      <HashLink
        path={href}
        disabled={disabled}
        onClick={handleClick}
        className={linkClassName}
        data-testid={id + "-nav-link"}
      >
        <div className={styles.button}>
          {isLeft && (
            <TextLoading active={textLoading ?? false}>
              <span className={textClasses.concat(styles.left).join(" ")}>{text}</span>
            </TextLoading>
          )}

          <div ref={!text || isLeft || isRight ? targetRef : undefined}>
            <FontAwesomeIcon fixedWidth icon={icon} data-testid={id} className={iconClasses} />
          </div>

          {isRight && (
            <TextLoading active={textLoading ?? false}>
              <span className={textClasses.concat(styles.right).join(" ")}>{text}</span>
            </TextLoading>
          )}

          {textPlacement === "bottom" && (
            <TextLoading active={textLoading ?? false}>
              <span ref={targetRef} className={textClasses.join(" ")}>
                {text}
              </span>
            </TextLoading>
          )}
        </div>
      </HashLink>

      <Overlay
        show={show}
        rootClose={true}
        placement="bottom"
        target={targetRef}
        onHide={handleHide}
        onExited={handleExited}
        container={ref.current}
      >
        <Popover id={id ?? "nav-btn"} data-testid={`${id}-menu`} className={styles.popover} style={{ width: width }}>
          {searchable && (
            <Form.Control
              type="text"
              value={search}
              disabled={loading}
              onChange={handleSearch}
              className={styles.search}
              placeholder={t("action.search")}
              onFocus={() => setExpandSearch(true)}
              style={{ height: expandSearch ? 45 : 30 }}
            />
          )}

          <Popover.Body className={styles.content}>
            <LoadingSpinner active={loading ?? false} className={styles.loading} />

            {!loading && (
              <ConditionalWrapper
                condition={!!showItemQuantity}
                wrapper={(children) => (
                  <ScrollableContainer height={showItemQuantity! * 55} hideScrollBar>
                    {children}
                  </ScrollableContainer>
                )}
              >
                <>
                  {(React.Children.map(children, (child) => child) as ReactNodeArray)?.filter((child: ReactNode) => {
                    const value = (child as ReactElement).props.children.toString()
                    return search === "" || value.toLowerCase().includes(search.toLowerCase())
                  })}
                </>
              </ConditionalWrapper>
            )}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  )
}

NavigationButton.Item = Item
export default NavigationButton
