import React from 'react'
import DataGrid, { Column } from 'devextreme-react/data-grid'

export default function RFTable({ selectedData }) {
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
                <Column dataField="RF1" />
                <Column dataField="RF2" />
                <Column dataField="RF3" />
            </DataGrid>
        </React.Fragment>
    )
}