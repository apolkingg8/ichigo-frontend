import {makeAutoObservable} from "mobx";
import {cssRule} from "typestyle";
import {viewHeight} from "csx";
import {
    amber,
    blue,
    blueGrey,
    brown,
    cyan,
    deepOrange,
    deepPurple,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow
} from "material-ui-colors";
import {RectReadOnly} from "react-use-measure/src/web";

export class StyleStore {
    private mainColorSeed = 0
    private colors: string[][] = [
        amber,
        blue,
        blueGrey,
        brown,
        cyan,
        deepOrange,
        deepPurple,
        green,
        indigo,
        lightBlue,
        lightGreen,
        lime,
        orange,
        pink,
        purple,
        red,
        teal,
        yellow,
    ]

    readonly mRowHeight = 240

    appBounds: RectReadOnly = {
        bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0,
    }

    get mainColor(): string[] {
        return this.colors[this.mainColorSeed]
    }

    get isMobile(): boolean {
        return this.appBounds.width < 600
    }

    setRandomColor = ()=> {
        this.mainColorSeed = Math.floor(Math.random() * this.colors.length)
    }

    constructor() {
        makeAutoObservable(this)
        cssRule('body', {
            backgroundColor: grey[900],
            height: viewHeight(100),
            margin: 0,
            padding: 0,
        })
        cssRule('#root', {
            height: viewHeight(100),
        })
    }
}

export default new StyleStore()