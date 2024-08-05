class Company {
  constructor(companyName, representativeName, registrationNumber, postCode, mainAddress, subAddress, profileImage = null) {
    this.companyName = companyName;
    this.representativeName = representativeName;
    this.registrationNumber = registrationNumber;
    this.address = {
      postCode: postCode,
      mainAddress: mainAddress,
      subAddress: subAddress,
    };
    this.profileImage = profileImage;
  }
}

export default Company;
