import { Component, OnInit } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { TreeViewService } from 'src/app/shared/services/advance/tree-view/tree-view.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  public config =TreeviewConfig.create(
    {
      hasAllCheckBox: false,
      hasFilter: false,
      hasCollapseExpand: false,
      decoupleChildFromParent: false,
      maxHeight: 500
    })
    public items: TreeviewItem[];
  constructor( private service: TreeViewService) { }

  ngOnInit(): void {
    this.items = this.service.getItems();
  }

}
