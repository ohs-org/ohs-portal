import { Meeting } from './../../../../models/meeting.model';
import { MeetingService } from './../../../../services/meeting.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-meetings-panel',
  templateUrl: './meetings-panel.component.html',
  styleUrls: ['./meetings-panel.component.scss'],
})
export class MeetingsPanelComponent implements OnInit {
  @Input() user: any;

  upcomingMeetings: Meeting[];
  isThereMeeting: boolean;

  // meeting day
  private yesterday = moment().subtract(1, 'days');
  private inAWeek = moment().add(7, 'days').startOf('day');

  constructor(private meetingService: MeetingService) {}

  ngOnInit(): void {
    this.meetingService.getMeetings().subscribe((data: Meeting[]) => {
      this.filterUpcomingMeetings(data);
    });
  }

  filterUpcomingMeetings = (meetings: Meeting[]): void => {
    this.upcomingMeetings = meetings.filter((meeting) => {
      return this.isMeetingWithinAWeek(meeting) && this.isMeetingUsers(meeting);
    });
    this.sortingMeetings();
    this.getThreeUpcomingMeetings();
    this.setIsThereMeeting();
  };

  setIsThereMeeting = () => {
    if (this.upcomingMeetings.length > 0) {
      this.isThereMeeting = true;
    } else {
      this.isThereMeeting = false;
    }
  };

  isMeetingUsers = (meeting: Meeting): boolean => {
    return (
      // (meeting.host.first_name === this.user.first_name &&
      //   meeting.host.last_name === this.user.last_name) ||
      meeting.members.some(
        (member) =>
          member.first_name === this.user.fist_name &&
          member.last_name === this.user.last_name
      )
    );
  };

  isMeetingWithinAWeek = (meeting: Meeting): boolean => {
    return moment(meeting.date).isBetween(this.yesterday, this.inAWeek);
  };

  sortingMeetings = (): void => {
    this.upcomingMeetings.sort(this.compareMeetings);
  };

  private compareMeetings = (
    meeting_a: Meeting,
    meeting_b: Meeting
  ): number => {
    if (moment(meeting_a.date).isBefore(moment(meeting_b.date))) return -1;
    if (moment(meeting_a.date).isAfter(moment(meeting_b.date))) return 1;
    if (moment(meeting_a.date).isSame(moment(meeting_b.date))) {
      if (moment(meeting_a.time, 'LT').isBefore(moment(meeting_b.time, 'LT')))
        return -1;
      if (moment(meeting_a.time, 'LT').isAfter(moment(meeting_b.time, 'LT')))
        return 1;
      if (moment(meeting_a.time, 'LT').isSame(moment(meeting_b.time, 'LT')))
        return 0;
    }
  };

  getThreeUpcomingMeetings = (): void => {
    if (this.upcomingMeetings.length > 3)
      this.upcomingMeetings = this.upcomingMeetings.slice(0, 3);

    console.log(this.upcomingMeetings);
  };

  getMeetingEndTime = (meetingTime: string, duration: number): any => {
    return moment(meetingTime, 'LT').add(duration, 'hours').format('LT');
  };
}

// {
//   "id": "3827093f-967b-419c-b065-035810269964",
//   "title": "Flying Fleet, The",
//   "date": "2021-03-25",
//   "time": "1:07 PM",
//   "duration": 3,
//   "location": "01521 Starling Avenue",
//   "description": "Horizontal multi-state throughput",
//   "host": {
//     "first_name": "Millicent",
//     "last_name": "Dobson",
//     "avatar": "https://robohash.org/nihildeserunteveniet.png?size=50x50&set=set1"
//   },
//   "members": [
//     {
//       "first_name": "Riobard",
//       "last_name": "Lamboll",
//       "avatar": "https://robohash.org/utsedullam.png?size=50x50&set=set1"
//     },
//     {
//       "first_name": "Hildegarde",
//       "last_name": "Surgener",
//       "avatar": "https://robohash.org/occaecaticommodivoluptatibus.png?size=50x50&set=set1"
//     },
//     {
//       "first_name": "Loleta",
//       "last_name": "Considine",
//       "avatar": "https://robohash.org/enimanimivoluptatem.png?size=50x50&set=set1"
//     },
//     {
//       "first_name": "Alfie",
//       "last_name": "Keher",
//       "avatar": "https://robohash.org/etsolutaquia.png?size=50x50&set=set1"
//     }
//   ]
// }
