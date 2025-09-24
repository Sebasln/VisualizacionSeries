using { my.seriestracker as db } from '../db/schema';

service SeriesTrackerService {
    entity Series as projection on db.Series;
    entity ViewingPartners as projection on db.ViewingPartners;
    
}