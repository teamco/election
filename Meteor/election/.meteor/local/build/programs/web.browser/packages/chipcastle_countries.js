//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Spacebars = Package.spacebars.Spacebars;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Countries;

(function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// packages/chipcastle_countries/packages/chipcastle_countries.js           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
(function () {                                                              // 1
                                                                            // 2
///////////////////////////////////////////////////////////////////////     // 3
//                                                                   //     // 4
// packages/chipcastle:countries/countries.js                        //     // 5
//                                                                   //     // 6
///////////////////////////////////////////////////////////////////////     // 7
                                                                     //     // 8
if (Meteor.isClient) {                                               // 1   // 9
                                                                     // 2   // 10
  Countries = function() {                                           // 3   // 11
    return [                                                         // 4   // 12
      { name: 'Afghanistan' },                                       // 5   // 13
      { name: 'Albania' },                                           // 6   // 14
      { name: 'Algeria' },                                           // 7   // 15
      { name: 'Andorra' },                                           // 8   // 16
      { name: 'Angola' },                                            // 9   // 17
      { name: 'Antigua and Barbuda' },                               // 10  // 18
      { name: 'Argentina' },                                         // 11  // 19
      { name: 'Armenia' },                                           // 12  // 20
      { name: 'Aruba' },                                             // 13  // 21
      { name: 'Australia' },                                         // 14  // 22
      { name: 'Austria' },                                           // 15  // 23
      { name: 'Azerbaijan' },                                        // 16  // 24
      { name: 'Bahamas, The' },                                      // 17  // 25
      { name: 'Bahrain' },                                           // 18  // 26
      { name: 'Bangladesh' },                                        // 19  // 27
      { name: 'Barbados' },                                          // 20  // 28
      { name: 'Belarus' },                                           // 21  // 29
      { name: 'Belgium' },                                           // 22  // 30
      { name: 'Belize' },                                            // 23  // 31
      { name: 'Benin' },                                             // 24  // 32
      { name: 'Bhutan' },                                            // 25  // 33
      { name: 'Bolivia' },                                           // 26  // 34
      { name: 'Bosnia and Herzegovina' },                            // 27  // 35
      { name: 'Botswana' },                                          // 28  // 36
      { name: 'Brazil' },                                            // 29  // 37
      { name: 'Brunei' },                                            // 30  // 38
      { name: 'Bulgaria' },                                          // 31  // 39
      { name: 'Burkina Faso' },                                      // 32  // 40
      { name: 'Burma' },                                             // 33  // 41
      { name: 'Burundi' },                                           // 34  // 42
      { name: 'Cambodia' },                                          // 35  // 43
      { name: 'Cameroon' },                                          // 36  // 44
      { name: 'Canada' },                                            // 37  // 45
      { name: 'Cape Verde' },                                        // 38  // 46
      { name: 'Central African Republic' },                          // 39  // 47
      { name: 'Chad' },                                              // 40  // 48
      { name: 'Chile' },                                             // 41  // 49
      { name: 'China' },                                             // 42  // 50
      { name: 'Colombia' },                                          // 43  // 51
      { name: 'Comoros' },                                           // 44  // 52
      { name: 'Congo, Democratic Republic of the' },                 // 45  // 53
      { name: 'Congo, Republic of the' },                            // 46  // 54
      { name: 'Costa Rica' },                                        // 47  // 55
      { name: 'Cote d\'Ivoire' },                                    // 48  // 56
      { name: 'Croatia' },                                           // 49  // 57
      { name: 'Cuba' },                                              // 50  // 58
      { name: 'Curacao' },                                           // 51  // 59
      { name: 'Cyprus' },                                            // 52  // 60
      { name: 'Czech Republic' },                                    // 53  // 61
      { name: 'Denmark' },                                           // 54  // 62
      { name: 'Djibouti' },                                          // 55  // 63
      { name: 'Dominica' },                                          // 56  // 64
      { name: 'Dominican Republic' },                                // 57  // 65
      { name: 'East Timor (see Timor-Leste)' },                      // 58  // 66
      { name: 'Ecuador' },                                           // 59  // 67
      { name: 'Egypt' },                                             // 60  // 68
      { name: 'El Salvador' },                                       // 61  // 69
      { name: 'Equatorial Guinea' },                                 // 62  // 70
      { name: 'Eritrea' },                                           // 63  // 71
      { name: 'Estonia' },                                           // 64  // 72
      { name: 'Ethiopia' },                                          // 65  // 73
      { name: 'Fiji' },                                              // 66  // 74
      { name: 'Finland' },                                           // 67  // 75
      { name: 'France' },                                            // 68  // 76
      { name: 'Gabon' },                                             // 69  // 77
      { name: 'Gambia, The' },                                       // 70  // 78
      { name: 'Georgia' },                                           // 71  // 79
      { name: 'Germany' },                                           // 72  // 80
      { name: 'Ghana' },                                             // 73  // 81
      { name: 'Greece' },                                            // 74  // 82
      { name: 'Grenada' },                                           // 75  // 83
      { name: 'Guatemala' },                                         // 76  // 84
      { name: 'Guinea' },                                            // 77  // 85
      { name: 'Guinea-Bissau' },                                     // 78  // 86
      { name: 'Guyana' },                                            // 79  // 87
      { name: 'Haiti' },                                             // 80  // 88
      { name: 'Holy See' },                                          // 81  // 89
      { name: 'Honduras' },                                          // 82  // 90
      { name: 'Hong Kong' },                                         // 83  // 91
      { name: 'Hungary' },                                           // 84  // 92
      { name: 'Iceland' },                                           // 85  // 93
      { name: 'India' },                                             // 86  // 94
      { name: 'Indonesia' },                                         // 87  // 95
      { name: 'Iran' },                                              // 88  // 96
      { name: 'Iraq' },                                              // 89  // 97
      { name: 'Ireland' },                                           // 90  // 98
      { name: 'Israel' },                                            // 91  // 99
      { name: 'Italy' },                                             // 92  // 100
      { name: 'Jamaica' },                                           // 93  // 101
      { name: 'Japan' },                                             // 94  // 102
      { name: 'Jordan' },                                            // 95  // 103
      { name: 'Kazakhstan' },                                        // 96  // 104
      { name: 'Kenya' },                                             // 97  // 105
      { name: 'Kiribati' },                                          // 98  // 106
      { name: 'Korea, North' },                                      // 99  // 107
      { name: 'Korea, South' },                                      // 100
      { name: 'Kosovo' },                                            // 101
      { name: 'Kuwait' },                                            // 102
      { name: 'Kyrgyzstan' },                                        // 103
      { name: 'Laos' },                                              // 104
      { name: 'Latvia' },                                            // 105
      { name: 'Lebanon' },                                           // 106
      { name: 'Lesotho' },                                           // 107
      { name: 'Liberia' },                                           // 108
      { name: 'Libya' },                                             // 109
      { name: 'Liechtenstein' },                                     // 110
      { name: 'Lithuania' },                                         // 111
      { name: 'Luxembourg' },                                        // 112
      { name: 'Macau' },                                             // 113
      { name: 'Macedonia' },                                         // 114
      { name: 'Madagascar' },                                        // 115
      { name: 'Malawi' },                                            // 116
      { name: 'Malaysia' },                                          // 117
      { name: 'Maldives' },                                          // 118
      { name: 'Mali' },                                              // 119
      { name: 'Malta' },                                             // 120
      { name: 'Marshall Islands' },                                  // 121
      { name: 'Mauritania' },                                        // 122
      { name: 'Mauritius' },                                         // 123
      { name: 'Mexico' },                                            // 124
      { name: 'Micronesia' },                                        // 125
      { name: 'Moldova' },                                           // 126
      { name: 'Monaco' },                                            // 127
      { name: 'Mongolia' },                                          // 128
      { name: 'Montenegro' },                                        // 129
      { name: 'Morocco' },                                           // 130
      { name: 'Mozambique' },                                        // 131
      { name: 'Namibia' },                                           // 132
      { name: 'Nauru' },                                             // 133
      { name: 'Nepal' },                                             // 134
      { name: 'Netherlands' },                                       // 135
      { name: 'Netherlands Antilles' },                              // 136
      { name: 'New Zealand' },                                       // 137
      { name: 'Nicaragua' },                                         // 138
      { name: 'Niger' },                                             // 139
      { name: 'Nigeria' },                                           // 140
      { name: 'North Korea' },                                       // 141
      { name: 'Norway' },                                            // 142
      { name: 'Oman' },                                              // 143
      { name: 'Pakistan' },                                          // 144
      { name: 'Palau' },                                             // 145
      { name: 'Palestinian Territories' },                           // 146
      { name: 'Panama' },                                            // 147
      { name: 'Papua New Guinea' },                                  // 148
      { name: 'Paraguay' },                                          // 149
      { name: 'Peru' },                                              // 150
      { name: 'Philippines' },                                       // 151
      { name: 'Poland' },                                            // 152
      { name: 'Portugal' },                                          // 153
      { name: 'Qatar' },                                             // 154
      { name: 'Romania' },                                           // 155
      { name: 'Russia' },                                            // 156
      { name: 'Rwanda' },                                            // 157
      { name: 'Saint Kitts and Nevis' },                             // 158
      { name: 'Saint Lucia' },                                       // 159
      { name: 'Saint Vincent and the Grenadines' },                  // 160
      { name: 'Samoa ' },                                            // 161
      { name: 'San Marino' },                                        // 162
      { name: 'Sao Tome and Principe' },                             // 163
      { name: 'Saudi Arabia' },                                      // 164
      { name: 'Senegal' },                                           // 165
      { name: 'Serbia' },                                            // 166
      { name: 'Seychelles' },                                        // 167
      { name: 'Sierra Leone' },                                      // 168
      { name: 'Singapore' },                                         // 169
      { name: 'Sint Maarten' },                                      // 170
      { name: 'Slovakia' },                                          // 171
      { name: 'Slovenia' },                                          // 172
      { name: 'Solomon Islands' },                                   // 173
      { name: 'Somalia' },                                           // 174
      { name: 'South Africa' },                                      // 175
      { name: 'South Korea' },                                       // 176
      { name: 'South Sudan' },                                       // 177
      { name: 'Spain ' },                                            // 178
      { name: 'Sri Lanka' },                                         // 179
      { name: 'Sudan' },                                             // 180
      { name: 'Suriname' },                                          // 181
      { name: 'Swaziland ' },                                        // 182
      { name: 'Sweden' },                                            // 183
      { name: 'Switzerland' },                                       // 184
      { name: 'Syria' },                                             // 185
      { name: 'Taiwan' },                                            // 186
      { name: 'Tajikistan' },                                        // 187
      { name: 'Tanzania' },                                          // 188
      { name: 'Thailand ' },                                         // 189
      { name: 'Timor-Leste' },                                       // 190
      { name: 'Togo' },                                              // 191
      { name: 'Tonga' },                                             // 192
      { name: 'Trinidad and Tobago' },                               // 193
      { name: 'Tunisia' },                                           // 194
      { name: 'Turkey' },                                            // 195
      { name: 'Turkmenistan' },                                      // 196
      { name: 'Tuvalu' },                                            // 197
      { name: 'Uganda' },                                            // 198
      { name: 'Ukraine' },                                           // 199
      { name: 'United Arab Emirates' },                              // 200
      { name: 'United Kingdom' },                                    // 201
      { name: 'United States' },                                     // 202
      { name: 'Uruguay' },                                           // 203
      { name: 'Uzbekistan' },                                        // 204
      { name: 'Vanuatu' },                                           // 205
      { name: 'Venezuela' },                                         // 206
      { name: 'Vietnam' },                                           // 207
      { name: 'Yemen' },                                             // 208
      { name: 'Zambia' },                                            // 209
      { name: 'Zimbabwe' }                                           // 210
    ];                                                               // 211
  }                                                                  // 212
  UI.registerHelper('countries', function() {                        // 213
    return Countries();                                              // 214
  });                                                                // 215
}                                                                    // 216
                                                                     // 217
///////////////////////////////////////////////////////////////////////     // 226
                                                                            // 227
}).call(this);                                                              // 228
                                                                            // 229
//////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['chipcastle:countries'] = {
  Countries: Countries
};

})();
