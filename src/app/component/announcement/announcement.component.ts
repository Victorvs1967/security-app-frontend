import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/model/announcement.model';
import { AnnouncementService } from 'src/app/service/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService
      .getAnnouncements()
      .subscribe(data => this.announcements = data);
  }

}
