import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import {percent} from "csx";
import Grid1 from "./Component/Grid1";
import Grid3 from "./Component/Grid3";
import Grid2 from "./Component/Grid2";
import Grid4 from "./Component/Grid4";
import Grid5 from "./Component/Grid5";
import Grid6 from "./Component/Grid6";
import Grid9 from "./Component/Grid9";
import Grid8 from "./Component/Grid8";
import Grid7 from "./Component/Grid7";
import styleStore from "./store/styleStore";
import useMeasure from "react-use-measure";

export interface AppProps {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: {
        width: percent(100),
    },
    r1: {
        height: 480,
        display: "flex",
    },
    r1c1: {
        flex: 1,
        height: percent(100),
        display: "flex",
        flexDirection: "column",
    },
    r1r1: {
        flex: 1,
        display: "flex",
    },
    r2: {
        height: 480,
        display: "flex",
    },
    r2c1: {
        flex: 1,
        height: percent(100),
        display: "flex",
        flexDirection: "column",
    },
    r2c2: {
        flex: 1,
        height: percent(100),
        display: "flex",
        flexDirection: "column",
    },
    r2c3: {
        flex: 1,
        height: percent(100),
        display: "flex",
        flexDirection: "column",
    },
    mRow: {
        display: "flex",
    }
})))

const App = (props: AppProps) => {
    const [appRef, appBounds] = useMeasure()
    const styles = getStyles()

    useEffect(()=> {
        styleStore.appBounds = appBounds
    }, Object.values(appBounds))

    if(styleStore.isMobile) {
        return (
            <div
                ref={appRef}
                className={styles.wrap}
            >
                <Grid1/>
                <div className={styles.mRow}>
                    <Grid3/>
                    <Grid4/>
                </div>
                <Grid2/>
                <Grid7/>
                <div className={styles.mRow}>
                    <Grid5/>
                    <Grid8/>
                </div>
                <div className={styles.mRow}>
                    <Grid6/>
                    <Grid9/>
                </div>
            </div>
        )
    }

    return (
        <div
            ref={appRef}
            className={styles.wrap}
        >
            <div className={styles.r1}>
                <Grid1/>
                <div className={styles.r1c1}>
                    <Grid2/>
                    <div className={styles.r1r1}>
                        <Grid3/>
                        <Grid4/>
                    </div>
                </div>
            </div>
            <div className={styles.r2}>
                <div className={styles.r2c1}>
                    <Grid5/>
                    <Grid6/>
                </div>
                <div className={styles.r2c2}>
                    <Grid7/>
                </div>
                <div className={styles.r2c3}>
                    <Grid8/>
                    <Grid9/>
                </div>
            </div>
        </div>
    )
}

export default observer(App)