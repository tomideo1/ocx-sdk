import { NewDomain, DomainPermissions,DomainGroup,DomainInvitee, Options } from '../utils/DataSchema';
import request from '../utils/requests';

export default class Domain {
    options: Options;
    constructor(options: Options) {
        this.options = options;
        this.options.url = process.env.OCX_DOMAIN_BASE_URL || process.env.VUE_APP_OCX_DOMAIN_BASE_URL;
    }

    initData(payload: object) {
        return {
            "OCX Schema": this.options.version,
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": payload
        };
    }


    async setupDomain() {
        const requestOptions: Options = {
            ...this.options,
        }
        const url = `api/v1/setup`;
        return request(`POST`, url, requestOptions);
    }

    async createDomainNode(data: NewDomain){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domainnode/invites/initiate`;
        return request(`POST`, url, requestOptions);
    }

    async  acceptDomainNode(data: NewDomain){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domainnode/invites/accept`;
        return request(`POST`, url, requestOptions);
    }


    async getDomainNodes(){
        const requestOptions: Options = {
            ...this.options
        };
        const url = `domain/${this.options.version}/domainnode/view`;
        return request(`GET`, url, requestOptions);
    }

    async getSingleDomainNode(domainNodeId: string){
        const requestOptions: Options = {
            ...this.options
        };
        const url = `domain/${this.options.version}/domainnode/view/${domainNodeId}`;
        return request(`GET`, url, requestOptions);
    }


    async  updateDomainNode(domainNodeId: string, data: NewDomain){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domainnode/invites/update/${domainNodeId}`;
        return request(`PATCH`, url, requestOptions);
    }


    async  deleteDomainNode(domainNodeId: string){
        const requestOptions: Options = {
            ...this.options,
        };
        const url = `domain/${this.options.version}/domainnode/invites/delete/${domainNodeId}`;
        return request(`DELETE`, url, requestOptions);
    }





    async createDomainInvite(data: DomainInvitee){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domaininvite/register/invitee`;
        return request(`POST`, url, requestOptions);
    }


    async getDomainInvitation(){
        const requestOptions: Options = {
            ...this.options
        };
        const url = `domain/${this.options.version}/domaininvite/view`;
        return request(`GET`, url, requestOptions);
    }

    async getSingleDomainInvite(domainInviteId: string){
        const requestOptions: Options = {
            ...this.options
        };
        const url = `domain/${this.options.version}/domaininvite/view/${domainInviteId}`;
        return request(`GET`, url, requestOptions);
    }


    async  updateDomainInviteNode(domainInviteId: string, data: DomainInvitee){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domaininvite/invites/update/${domainInviteId}`;
        return request(`PATCH`, url, requestOptions);
    }


    async  deleteDomainInvite(domainInviteId: string){
        const requestOptions: Options = {
            ...this.options,
        };
        const url = `domain/${this.options.version}/domaininvite/invites/delete/${domainInviteId}`;
        return request(`DELETE`, url, requestOptions);
    }






    async createDomainGroup(data: DomainGroup){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domaingroup/register`;
        return request(`POST`, url, requestOptions);
    }


    async getDomainGroups(){
        const requestOptions: Options = {
            ...this.options
        };
        const url = `domain/${this.options.version}/domaingroup/view`;
        return request(`GET`, url, requestOptions);
    }

    async getSingleDomainGroup(domainGroupId: string){
        const requestOptions: Options = {
            ...this.options
        };
        const url = `domain/${this.options.version}/domaingroup/view/${domainGroupId}`;
        return request(`GET`, url, requestOptions);
    }


    async  updateDomainGroup(domainGroupId: string, data: DomainGroup){
        const requestOptions: Options = {
            ...this.options,
            data: this.initData(data)
        };
        const url = `domain/${this.options.version}/domaingroup/update/${domainGroupId}`;
        return request(`PATCH`, url, requestOptions);
    }


    async  deleteDomainGroup(domainGroupId: string){
        const requestOptions: Options = {
            ...this.options,
        };
        const url = `domain/${this.options.version}/domaingroup/delete/${domainGroupId}`;
        return request(`DELETE`, url, requestOptions);
    }








}