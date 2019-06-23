import {Component, OnInit} from '@angular/core';
import {Advert} from "../shared/advert/model/advert.model";
import {AdvertService} from "../shared/advert/service/advert.service";

@Component({
    selector: 'app-advert-listing',
    templateUrl: './advert-listing.component.html',
    styleUrls: ['./advert-listing.component.scss']
})
export class AdvertListingComponent implements OnInit {
    adverts: Advert[];

    constructor(private advertService: AdvertService) {
    }

    ngOnInit() {
        return this.advertService.getAdverts()
            .subscribe(data => {
                this.adverts = data;
            });
    }
}
