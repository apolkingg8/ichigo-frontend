import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import styleStore from "../store/styleStore";

export interface Grid6Props {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: styleStore.isMobile ? {
        flex: 1,
        height: styleStore.mRowHeight,
        background: styleStore.mainColor[600],
    } : {
        flex: 2,
        background: styleStore.mainColor[600],
    },
})))

const Grid6 = (props: Grid6Props) => {
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

export default observer(Grid6)