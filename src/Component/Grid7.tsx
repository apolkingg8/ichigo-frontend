import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import styleStore from "../store/styleStore";
import {percent} from "csx";

export interface Grid7Props {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: styleStore.isMobile ? {
        width: percent(100),
        height: 240,
        background: styleStore.mainColor[700],
    } : {
        flex: 1,
        background: styleStore.mainColor[700],
    },
})))

const Grid7 = (props: Grid7Props) => {
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

export default observer(Grid7)