import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import styleStore from "../store/styleStore";

export interface Grid5Props {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: styleStore.isMobile ? {
        flex: 1,
        height: styleStore.mRowHeight,
        background: styleStore.mainColor[500],
    } : {
        flex: 1,
        background: styleStore.mainColor[500],
    },
})))

const Grid5 = (props: Grid5Props) => {
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

export default observer(Grid5)