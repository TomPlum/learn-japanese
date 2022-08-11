import SettingsTabTitle from "./SettingsTabTitle";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/sass/components/settings/modal/PlaySettingsTab.module.scss";
import SettingsDropdown from "./SettingsDropdown";
import { Preference } from "../../../domain/user/Preference";
import { useTranslation } from "react-i18next";

const PlaySettingsTab = () => {

    const { t } = useTranslation("translation", { keyPrefix: "settings.modal.play" });

    return (
        <div data-testid="play-settings-tab">
            <SettingsTabTitle title={t("heading")} description={t("desc")} />

            <div className={styles.section}>
                <p className={styles.heading}>{t("high-scores.label")}</p>
                <p className={styles.text}>
                    {t("high-scores.desc")}
                </p>
                <SettingsDropdown
                    buttonIcon={faCrown}
                    optionsKey="play.high-scores"
                    id="play-settings-high-score-selector"
                    preference={Preference.HIGH_SCORES_BEHAVIOUR}
                />
            </div>
        </div>
    );
}

export default PlaySettingsTab;
