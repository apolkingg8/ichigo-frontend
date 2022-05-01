import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import {percent} from "csx";
import styleStore from "../store/styleStore";

export interface Grid1Props {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: styleStore.isMobile ? {
        width: percent(100),
        height: styleStore.mRowHeight,
        background: styleStore.mainColor[100],
    } : {
        height: percent(100),
        flex: 1,
        background: styleStore.mainColor[100],
    },
})))

const Grid1 = (props: Grid1Props) => {
    let styles = getStyles()

    return (
        <div
            className={styles.wrap}
            onClick={()=> {
                styleStore.setRandomColor()
            }}
        >

        </div>
    )
}

export default observer(Grid1)