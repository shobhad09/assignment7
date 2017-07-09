import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'grid-ui',
    templateUrl: './Views/grid.component.html'
})
export class GridComponent {
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    gridColumns: Array<Object> = new Array<Object>();
    gridData: Array<Object> = new Array<Object>();
    @Input("grid-entityname")
    EntityName: string = "";
    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {
        if(_gridData.length > 0) {
            var columnNames = Object.keys(_gridData[0]);
            this.gridColumns = new Array<Object>();
            for(var index in columnNames) {
                this.gridColumns.push(columnNames[index]);
            }
            this.gridData = _gridData;
        }
    }
}