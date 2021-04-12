import React from 'react'
import DataGrid, { Column } from 'devextreme-react/data-grid'

export default function ModeTable({ selectedData }) {
    return (
        <React.Fragment>
            <DataGrid
                dataSource={selectedData}
                selection={{ mode: 'single' }}
                hoverStateEnabled={true}
                allowColumnReordering={true}
                columnAutoWidth={true}
                showBorders={true}
            >
                <Column dataField="ELNOT" />
                <Column dataField="PD" />
                <Column dataField="Scan Type" />
                <Column dataField="IR" />
                <Column dataField="Scan Period" />
                <Column dataField="Mod Type" />
            </DataGrid>
        </React.Fragment>
    )
}