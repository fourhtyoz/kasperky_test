import { makeAutoObservable } from "mobx"
import type { IData_SnippetNews } from "../types"

class NewsStore {
    newsData: IData_SnippetNews | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setNewsData(data: IData_SnippetNews) {
        this.newsData = data
    }
}

export const newsStore = new NewsStore()