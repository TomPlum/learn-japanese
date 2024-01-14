import DashboardCard from "../../layout/card/DashboardCard"
import DashboardCardHeader from "../../layout/card/DashboardCardHeader"
import { faPencilAlt, faPlusCircle, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import styles  from "./FavouritesCard.module.scss"
import { useState } from "react"
import FavouriteButton from "../../ui/buttons/favourite/FavouriteButton"
import SessionMode from "../../../domain/session/SessionMode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LaunchPresetConfirmationModal from "../../settings/LaunchPresetConfirmationModal"
import EditFavouritesModal from "../../settings/EditFavouritesModal"
import DashboardCardLink from "../../layout/card/DashboardCardLink"
import ScrollableContainer from "../../ui/ScrollableContainer"
import { useTranslation } from "react-i18next"
import useGetPresetFavourites from "api/hooks/useGetPresetFavourites";

const FavouritesCard = () => {
  const { t, ready } = useTranslation("translation", { keyPrefix: "dashboard.card.favourites" })
  const actions = useTranslation("translation", { keyPrefix: "action" }).t
  const { data: presets, refetch, isPending, isError } = useGetPresetFavourites()

  const [editing, setEditing] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [selected, setSelected] = useState<SessionMode | undefined>(undefined)

  const error = isError ? 'Failed to retrieve.' : undefined

  const handleStart = (preset: SessionMode) => {
    setConfirm(true)
    setSelected(preset)
  }

  const handleFinishEditing = () => {
    reload()
    setEditing(false)
  }

  const reload = () => {
    setUpdating(true)
    refetch().then(() => setUpdating(false))
  }

  const handleDismissConfirmation = () => {
    setConfirm(false)
    setSelected(undefined)
  }

  return (
    <DashboardCard className={styles.card} loading={isPending && !ready} updating={updating} error={error}>
      <DashboardCard.Header onReload={reload}>
        <DashboardCardHeader.Title>{t("title")}</DashboardCardHeader.Title>

        <DashboardCardHeader.SettingsMenu>
          <DashboardCardLink text={actions("edit")} icon={faPencilAlt} onClick={() => setEditing(true)} />
          <DashboardCardLink text={actions("refresh")} icon={faSyncAlt} onClick={reload} />
        </DashboardCardHeader.SettingsMenu>
      </DashboardCard.Header>

      <DashboardCard.Body className={styles.body}>
        <div className={styles.favourites}>
          {presets && presets.length === 0 && !error && (
            <p className={styles.emptyMessage} onClick={() => setEditing(true)}>
              <FontAwesomeIcon title="Add" icon={faPlusCircle} className={styles.emptyAddButton} />
              <span>You can track your favourite presets here</span>
            </p>
          )}

          <ScrollableContainer maxHeight={300} className={styles.favourites}>
            {presets && presets.map((preset: SessionMode) => (
              <FavouriteButton
                key={preset.id}
                preset={preset}
                onStart={handleStart}
                className={styles.favourite}
                selected={selected?.id === preset.id}
              />
            ))}
          </ScrollableContainer>

          {confirm && selected && (
            <LaunchPresetConfirmationModal preset={selected} onDismiss={handleDismissConfirmation} />
          )}

          {presets && editing && (
            <EditFavouritesModal
              favourites={presets}
              onSuccess={handleFinishEditing}
              onDismiss={() => setEditing(false)}
            />
          )}
        </div>
      </DashboardCard.Body>
    </DashboardCard>
  )
}

export default FavouritesCard
