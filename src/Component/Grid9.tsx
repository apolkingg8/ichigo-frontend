import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import styleStore from "../store/styleStore";

export interface Grid9Props {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: styleStore.isMobile ? {
        flex: 1,
        height: styleStore.mRowHeight,
        background: styleStore.mainColor[900],
    } : {
        flex: 1,
        background: styleStore.mainColor[900],
    },
})))

const Grid9 = (props: Grid9Props) => {
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

export default observer(Grid9)