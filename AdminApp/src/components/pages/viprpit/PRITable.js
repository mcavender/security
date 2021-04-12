import React from 'react'
import DataGrid, { Column } from 'devextreme-react/data-grid'

export default function PRITable({ selectedData }) {
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
                <Column dataField="PRI1" />
                <Column dataField="PRI2" />
                <Column dataField="PRI3" />
            </DataGrid>
        </React.Fragment>
    )
}