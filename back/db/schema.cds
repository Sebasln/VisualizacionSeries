namespace  my.seriestracker;

//El using es como el import de java

using { cuid, managed } from '@sap/cds/common';

/*la entity pues la entidad y cuid y managed son los aspectos que le doy tras haber importado cuid y managed
cuid le da un ID unico a cada entity 
y managed hace que se añadan automáticamente cuatro campos para auditoría: createdAt, createdBy, modifiedAt, modifiedBy
name lleva key para que esas entidades no tengan nombres repetidos*/

entity ViewingPartners : cuid, managed {
    key name : String(100) not null;
}

entity Series : cuid, managed {
    title           : String not null;
    description     : String;
    currentEpisode  : Integer default 1;
    totalEpisodes   : Integer;
}