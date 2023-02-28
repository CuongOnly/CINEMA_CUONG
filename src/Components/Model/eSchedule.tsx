export default interface eSchedule {
  id: string;
  code: string;
  name: string;
  address: string;
  mapEmbeb: string;
  slug: string;
  cityId: string;
  dates: Array<{
    showDate: string;
    dayOfWeekLabel: string;
    bundles: Array<{
      version: string;
      sessions: Array<{
        showTime: string;
        screenName: string;
      }>;
    }>;
  }>;
}
