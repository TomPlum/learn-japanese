import styles  from "./DashboardLayoutEditor.module.scss"
import SettingsTabTitle from "../../../settings/modal/SettingsTabTitle"
import EditorColumn from "./../EditorColumn"

export interface DashboardLayoutEditorProps {
  onClose: () => void
}

const DashboardLayoutEditor = (props: DashboardLayoutEditorProps) => {
  const { onClose } = props

  return (
    <div data-testid="dashboard-layout-editor" className={styles.wrapper}>
      <SettingsTabTitle
        title="Dashboard Layout Editor"
        close={{ onClick: onClose, className: styles.close }}
        description="Customise the layout of your home-page dashboard."
      />

      <div className={styles.container}>
        <EditorColumn className={styles.left} />
        <EditorColumn className={styles.middle} defaultCards={[{ name: "Start", size: "sm" }]} />
        <EditorColumn className={styles.right} />
      </div>
    </div>
  )
}

export default DashboardLayoutEditor
