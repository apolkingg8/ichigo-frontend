import React from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";
import styleStore from "../store/styleStore";

export interface Grid3Props {

}

const getStyles = computedFn(() => (stylesheet({
    wrap: styleStore.isMobile ? {
        flex: 1,
        height: 240,
        background: styleStore.mainColor[300],
    } : {
        flex: 1,
        background: styleStore.mainColor[300],
    },
})))

const Grid3 = (props: Grid3Props) => {
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

export default observer(Grid3)