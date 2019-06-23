import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Advert} from "../shared/advert/model/advert.model";
import {AdvertService} from "../shared/advert/service/advert.service";

@Component({
    selector: 'app-advert-details',
    templateUrl: './advert-details.component.html',
    styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {
    id: number;
    advert: Advert;

    constructor(private route: ActivatedRoute, private advertService: AdvertService) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
        return this.advertService.getAdvert(this.id)
            .subscribe(data => {
                this.advert = data;
            });
    }
}
