import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { SelectDropdownConfig } from '@christophhu/angular-select-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = "app"
  singleSelect: any = []
  multiSelect: any = []
  stringArray: any = []
  objectsArray: any = []
  optTemplate: any = []
  stringOptions = [
    "Burns Dalton",
    "Mcintyre Lawson",
    "Amie Franklin",
    "Amie Palmer",
    "Amie Andrews"
  ]

  config: SelectDropdownConfig = {
    displayKey: "name",
    search: true,
    limitTo: 0,
    height: "250px",
    enableSelectAll: true,
    placeholder: "Select",
    searchOnKey: "",
    moreText: "mehr",
    noResultsFound: "No results found!",
    searchPlaceholder: 'Search',
    clearOnSelection: false,
    inputDirection: 'ltr',
  };
  selectedOptions = [
    {
      _id: "5a66d6c31d5e4e36c7711b7a",
      index: 0,
      balance: "$2,806.37",
      picture: "http://placehold.it/32x32",
      name: "Burns Dalton"
    },
    {
      _id: "5a66d6c3657e60c6073a2d22",
      index: 1,
      balance: "$2,984.98",
      picture: "http://placehold.it/32x32",
      name: "Mcintyre Lawson"
    },
  ];
  options = [
    {
      _id: "5a66d6c31d5e4e36c7711b7a",
      index: 0,
      balance: "$2,806.37",
      picture: "http://placehold.it/32x32",
      name: "Burns Dalton"
    },
    {
      _id: "5a66d6c3657e60c6073a2d22",
      index: 1,
      balance: "$2,984.98",
      picture: "http://placehold.it/32x32",
      name: "Mcintyre Lawson"
    },
    {
      _id: "5a66d6c376be165a5a7fae33",
      index: 2,
      balance: "$2,794.16",
      picture: "http://placehold.it/32x32",
      name: "Amie Franklin"
    },
    {
      _id: "5a66d6c376be165a5a7fae34",
      index: 2,
      balance: "$3,794.16",
      picture: "http://placehold.it/32x32",
      name: "Amie Palmer"
    },
    {
      _id: "5a66d6c376be165a5a7fae37",
      index: 2,
      balance: "$4,794.16",
      picture: "http://placehold.it/32x32",
      name: "Amie Andrews"
    }
  ]
  resetOption: any
  selectForm?: UntypedFormGroup
  constructor(
    // private fromBuilder: UntypedFormBuilder,
    // private drodownService: SelectDropdownService
  ) {
    // this.selectForm = this.fromBuilder.group({
    //   selectDrop: [null, Validators.required]
    // })
  }
  ngOnInit() {
    this.resetOption = [this.options[0]]
  }
  changeValue($event: any) {
    console.log($event)
    // console.log(this.selectForm.getRawValue())
  }

  searchChange($event: Event) {
    // console.log($event)
  }

  reset() {
    this.resetOption = []
  }
}
