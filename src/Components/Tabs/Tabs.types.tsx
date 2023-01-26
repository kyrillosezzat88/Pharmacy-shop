export type TabsPropsType = {
    Tabs:{
        id:number,
        title:string
    }[],
    HandleTabs?:(id:number) => void
}