import {Component, Input} from '@angular/core';
import {interval, Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

interface timeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})

export class CountDownComponent {
  @Input() endTime: string | undefined;
  public timeLeft$: Observable<timeComponents>;

  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calcDateDiff()),
      shareReplay(1)
    );
  }

  private calcDateDiff(): timeComponents {
    const endDay = new Date(this.endTime as string);
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    ) + daysToDday*hoursInADay;

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }
}
