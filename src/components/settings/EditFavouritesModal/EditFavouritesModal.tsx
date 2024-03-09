import { ModalProps } from "react-bootstrap/Modal"
import styles  from "./EditFavouritesModal.module.scss"
import { Alert, Button, Fade, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleDown,
  faCircleNotch,
  faGraduationCap,
  faPlay,
  faStar,
  faTimes
} from "@fortawesome/free-solid-svg-icons"
import { useCallback, useEffect, useRef, useState } from "react";
import SessionMode from "types/session/SessionMode"
import LoadingSpinner from "../../ui/loading/LoadingSpinner"
import ScrollableContainer from "../../ui/ScrollableContainer"
import PlayMode from "types/session/PlayMode"
import LearnMode from "types/session/LearnMode"
import EditFavouriteButton from "../../ui/buttons/favourite/EditFavouriteButton"
import ConfirmModal from "../../ui/ConfirmModal"
import ExistingFavouriteButton from "../../ui/buttons/favourite/ExistingFavouriteButton"
import { useTranslation } from "react-i18next"
import useGetPresets from "api/hooks/presets/useGetPresets";
import useUpdatePresetFavourites from "api/hooks/presets/useUpdatePresetFavourites";
import { EditFavouritesModalProps } from "components/settings/EditFavouritesModal/types.ts";

const EditFavouritesModal = ({ favourites, onSuccess, onDismiss }: EditFavouritesModalProps) => {
  const [data, setData] = useState<SessionMode[]>([])
  const [filtered, setFiltered] = useState<SessionMode[]>([])
  const [add, setAdd] = useState<number[]>([])
  const [remove, setRemove] = useState<number[]>([])
  const [showPlay, setShowPlay] = useState(true)
  const [showLearn, setShowLearn] = useState(true)
  const [confirm, setConfirm] = useState(false)

  const { t, ready } = useTranslation()
  const presetsRef = useRef<HTMLParagraphElement>(null)
  const { t: actions } = useTranslation("translation", { keyPrefix: "action" })
  const { data: presets, isLoading, isError: isGetPresetsError } = useGetPresets()

  const { mutateAsync: updateFavourites, isPending: saving, isError } = useUpdatePresetFavourites()

  useEffect(() => {
    if (presets) {
      const favouritePlayIds = favourites.filter((it) => it instanceof PlayMode).map((it) => it.id)
      const favouriteLearnIds = favourites.filter((it) => it instanceof LearnMode).map((it) => it.id)
      const notFavouritePlay = presets.play.filter((it) => !favouritePlayIds.includes(it.id))
      const notFavouriteLearn = presets.learn.filter((it) => !favouriteLearnIds.includes(it.id))
      const notFavourite: SessionMode[] = notFavouriteLearn.concat(notFavouritePlay)
      setFiltered(notFavourite)
      setData(notFavourite)
    }
  }, [presets]);

  const handleToggleShowPlay = useCallback(() => {
    setShowPlay(current => !current)

    if (!showPlay) {
      setFiltered(current => current.concat(data.filter((it) => it instanceof PlayMode)))
    } else {
      setFiltered(current => current.filter((it) => !(it instanceof PlayMode)))
    }
  }, [showPlay, filtered, data])

  const handleToggleShowLearn = useCallback(() => {
    setShowLearn(current => !current)

    if (!showLearn) {
      setFiltered(current => current.concat(data.filter((it) => it instanceof LearnMode)))
    } else {
      setFiltered(current => current.filter((it) => !(it instanceof LearnMode)))
    }
  }, [showLearn, filtered, data])

  const modalProps: ModalProps = {
    show: true,
    size: "lg",
    centered: true,
    backdrop: "static",
    enforceFocus: false,
    dialogClassName: styles.dialog,
    contentClassName: styles.content,
    "data-testid": "edit-favourites"
  }

  const handleSave = async () => {
    try {
      await updateFavourites({ add, remove })
      onSuccess()
    } catch {}
  }

  const handleDismiss = () => {
    if (add.length > 0 || remove.length > 0) {
      setConfirm(true)
    } else {
      onDismiss()
    }
  }

  const handleAddPresets = () => {
    presetsRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Modal {...modalProps}>
      <Modal.Body className={[styles.modal, confirm ? styles.blur : ""].join(" ")}>
        {confirm && (
          <ConfirmModal
            onConfirm={onDismiss}
            onDismiss={() => setConfirm(false)}
            body={t("dashboard.card.favourites.modal.quit-confirmation.body")}
            title={t("dashboard.card.favourites.modal.quit-confirmation.title")}
          />
        )}

        <div className={styles.header}>
          {!isLoading && ready && (
            <FontAwesomeIcon
              fixedWidth
              icon={faStar}
              className={styles.icon
            } />
          )}

          <LoadingSpinner
            variant="warning"
            className={styles.loading}
            active={isLoading || !ready}
          />

          <span className={styles.name}>
            {t("presets.edit.title")}
          </span>

          <FontAwesomeIcon
            fixedWidth
            icon={faTimes}
            onClick={handleDismiss}
            title={actions("close")}
            className={styles.close}
          />
        </div>

        <Fade in appear>
          <div className={styles.body}>
            {isError && (
              <Alert variant="danger">
                Failed to update favourites.
              </Alert>
            )}

            {isGetPresetsError && (
              <Alert variant="danger">
                Failed to retrieve presets.
              </Alert>
            )}

            {!isLoading && !isError && ready && (
              <ScrollableContainer maxHeight={500} className={styles.scrollable}>
                <p className={styles.heading}>
                  Existing Favourites
                </p>

                <div className={styles.favourites}>
                  {favourites.map((preset: SessionMode) => {
                    const presetType = preset instanceof PlayMode ? 'play' : 'learn'

                    return (
                      <ExistingFavouriteButton
                        icon={preset.icon}
                        name={preset.displayName}
                        id={preset.favourite_id!}
                        className={styles.favourite}
                        selected={remove.includes(preset.favourite_id!)}
                        key={`existing-${presetType}-favourite-button-${preset.id}`}
                        onRemove={(id: number) => setRemove((existing) => existing.concat(id))}
                        onCancel={(id: number) => setRemove((existing) => existing.filter((it) => it !== id))}
                      />
                    )
                  })}

                  {favourites.length === 0 && (
                    <p className={styles.empty} onClick={handleAddPresets}>
                      <FontAwesomeIcon icon={faArrowAltCircleDown} fixedWidth />
                      You can select favourites below
                    </p>
                  )}
                </div>

                <p className={styles.heading} ref={presetsRef}>
                  Available Presets
                </p>

                <div className={styles.favourites}>
                  {filtered.map((preset: SessionMode) => {
                    const presetType = preset instanceof PlayMode ? 'play' : 'learn'
                    return (
                      <EditFavouriteButton
                        id={preset.id}
                        icon={preset.icon}
                        name={preset.displayName}
                        className={styles.favourite}
                        selected={add.includes(preset.id)}
                        key={`edit-${presetType}-favourite-button-${preset.id}`}
                        onAdd={(id: number) => setAdd((existing) => existing.concat(id))}
                        onCancel={(id: number) => setAdd((existing) => existing.filter((it) => it !== id))}
                      />
                    )
                  })}
                </div>

                {!isLoading && ready && filtered.length === 0 && (
                  <span className={styles.empty}>
                    There&apos;s nothing that matches your filters.
                  </span>
                )}
              </ScrollableContainer>
            )}
          </div>
        </Fade>

        <div className={styles.footer}>
          <Button
            onClick={handleToggleShowPlay}
            title={showPlay ? "Hide Play" : "Show Play"}
            className={[styles.play, !showPlay ? styles.disabled : ""].join(" ")}
          >
            <FontAwesomeIcon icon={faPlay} fixedWidth />
          </Button>

          <Button
            onClick={handleToggleShowLearn}
            title={showLearn ? "Hide Learn" : "Show Learn"}
            className={[styles.learn, !showLearn ? styles.disabled : ""].join(" ")}
          >
            <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
          </Button>

          <Button
            variant="success"
            onClick={handleSave}
            className={styles.save}
            disabled={isLoading || saving || !ready}
            data-testid='edit-favourites-save-button'
          >
            {saving ? <FontAwesomeIcon icon={faCircleNotch} fixedWidth spin /> : actions("save")}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default EditFavouritesModal
