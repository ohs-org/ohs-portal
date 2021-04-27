import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-panel',
  templateUrl: './inbox-panel.component.html',
  styleUrls: ['./inbox-panel.component.scss'],
})
export class InboxPanelComponent implements OnInit {
  listItems = [
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      name: 'Nilesh Dubey',
      message: 'Hello, are you available now?',
      time: '12:00 PM',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      name: 'Nancee Dalton',
      message: 'Have you checked my email?',
      time: '12:00 PM',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      name: 'Mabelle Doyland',
      message: 'Please wait!!',
      time: '12:00 PM',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      name: 'Janeen Carnow',
      message: 'Can I ask you something?',
      time: '12:00 PM',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      name: 'Pancho Mazillius',
      message: 'Hey! How are you?',
      time: '12:00 PM',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
