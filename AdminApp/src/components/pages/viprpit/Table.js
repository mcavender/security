import React from 'react'
import DataGrid, { Column, Sorting, StateStoring } from 'devextreme-react/data-grid'

export default function Table({ elnot, selected }) {
    // eslint-disable-next-line
    const data = dummy.filter(int => int.ELNOT == elnot)

    return (
        <DataGrid
            id="gridContainer"
            dataSource={data}
            selection={{ mode: 'single' }}
            hoverStateEnabled={true}
            allowColumnReordering={true}
            columnAutoWidth={true}
            showBorders={true}
            onSelectionChanged={selected}
        >
            <Sorting mode="multiple" />
            <StateStoring enabled={true} type="localStorage" storageKey="storage" />
            <Column dataField="ELNOT" />
        </DataGrid>
    )
}