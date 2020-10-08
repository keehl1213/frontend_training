Date.prototype.format = function () {
    const yyyy = this.getFullYear().toString();                                 
    const mm = (this.getMonth() + 1).toString();    
    const dd = this.getDate().toString();
    const h =  this.getHours().toString();
    const m = this.getMinutes().toString();
    return `${yyyy}/${mm.padStart(2, '0')}/${dd.padStart(2, '0')} ${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
};

export default Date;