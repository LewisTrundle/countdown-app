import { RepeatOptions } from '../constants/RepeatOptions';
import { NotificationOptions } from '../constants/NotificationOptions';
import { CountdownPeriods } from '../constants/CountdownPeriods';

export class Countdown {
  title: string
  dateTime: Date
  repeat: RepeatOptions
  notifications: NotificationOptions
  icon?: any
  description?: string
  timeLeft: any
  timeLeftSingleUnit: {value: Number, unit: String}

  constructor(title: string, dateTime: Date, repeat: RepeatOptions, notification: NotificationOptions, description?: string) {
    this.title = title;
    this.dateTime = dateTime;
    this.description = description;
    this.repeat = repeat;
    this.notifications = notification;
    this.timeLeftSingleUnit = {value: 0, unit: CountdownPeriods.Seconds}
  };

  setTitle = (title: string): void => {
    this.title = title;
  };
  setDateTime = (date: Date): void => {
    this.dateTime = date;
  };
  setRepeat = (repeat: RepeatOptions): void => {
    this.repeat = repeat;
  };
  setDescription = (description: string): void => {
    this.description = description;
  };



  displayTimeDifference = () => {
    const calculateTimeDifference = (timeDifference) => {
      const seconds = Math.floor(timeDifference / 1000);
      return ({
        years: Math.floor(seconds / (365 * 24 * 60 * 60)),
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      });
    };

    const decideTimeUnit = (timeDiff) => {
      if (timeDiff.years > 0) {
        return CountdownPeriods.Years;
      };
      if (timeDiff.months > 0) {
        return CountdownPeriods.Months;
      };
      if (timeDiff.days > 0) {
        return CountdownPeriods.Days;
      };
      if (timeDiff.hours > 0) {
        return CountdownPeriods.Hours;
      };
      if (timeDiff.minutes > 0) {
        return CountdownPeriods.Minutes;
      };
      return CountdownPeriods.Seconds;
    }

    const currentDate = new Date().getTime();
    const expiryTime = new Date(this.dateTime).getTime();
    const timeDifference = expiryTime - currentDate;
    let timeDiff;
    if (timeDifference <= 0) {
      timeDiff = calculateTimeDifference(0);
    } else {
      timeDiff = calculateTimeDifference(timeDifference);
    };
    this.timeLeft = timeDiff;
    const timeUnit = decideTimeUnit(timeDiff);
    this.timeLeftSingleUnit = {value: timeDiff[timeUnit], unit: timeUnit};
  }
}