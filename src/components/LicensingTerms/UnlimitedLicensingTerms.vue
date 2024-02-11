<template>
    <div class="glassDiv"
        style="z-index: 1000; overflow-y: auto; height: 80vh; position: fixed; backdrop-filter: blur(20px); color: white;">
        <div class="uc-flex uc-flex-col uc-max-h-[100%] uc-max-w-[100%]">
            <div style="display: flex; justify-content: space-between;"
                class="uc-flex uc-items-center uc-justify-start uc-shrink-0 uc-space-x-2 uc-px-8 uc-truncate uc-rounded-tr uc-rounded-tl uc-h-24 uc-bg-gray-700">
                <!---->
                <h2 class="uc-font-medium uc-truncate uc-flex-1 uc-text-lg" style="text-align: center; margin-bottom: 2%;">
                    Unlimited Licensing Terms <!----></h2>
                <a @click="$emit('close')" class="closeButton" style="text-decoration: none; cursor: pointer;">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="xmark" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                        class="svg-inline--fa fa-xmark tw-text-red-500" style="margin: 5%;">
                        <path fill="currentColor"
                            d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z"
                            class=""></path>
                    </svg>
                </a>
            </div>
            <div
                class="tw-w-[calc(100vw-4rem)] tw-max-w-[60rem] uc-overflow-auto air-core-scroll uc-flex-1 uc-px-8 uc-bg-gray-700 air-core-scroll--marketplace">
                <div>
                    <div style="display: flex; width: 100%; justify-content: center;">
                        <table class="tw-w-full">
                            <tbody>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        MP3
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center"><svg
                                            aria-hidden="true" focusable="false" data-prefix="far" data-icon="check"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            class="svg-inline--fa fa-check tw-text-blue-300">
                                            <path fill="currentColor"
                                                d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                                                class=""></path>
                                        </svg></td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        WAV*
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center"><svg
                                            aria-hidden="true" focusable="false" data-prefix="far" data-icon="check"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            class="svg-inline--fa fa-check tw-text-blue-300">
                                            <path fill="currentColor"
                                                d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                                                class=""></path>
                                        </svg></td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Trackout*
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center"><svg
                                            aria-hidden="true" focusable="false" data-prefix="far" data-icon="check"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            class="svg-inline--fa fa-check tw-text-blue-300">
                                            <path fill="currentColor"
                                                d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                                                class=""></path>
                                        </svg></td>
                                </tr>
                                <tr><!---->
                                    <td colspan="2"
                                        class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        *Please see individual beats for available files.
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Distribution Copies
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        Unlimited
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Free Downloads
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        Unlimited
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Performances (Non Profit)
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        4000
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Paid Performances
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        400
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Music Videos
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        Unlimited
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Audio Streams
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        Unlimited
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Video Streams
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        Unlimited
                                    </td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Broadcasting Rights
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center"><svg
                                            aria-hidden="true" focusable="false" data-prefix="far" data-icon="check"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            class="svg-inline--fa fa-check tw-text-blue-300">
                                            <path fill="currentColor"
                                                d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                                                class=""></path>
                                        </svg></td>
                                </tr>
                                <tr>
                                    <th class="tw-w-1/2 tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3">
                                        Number of Radio Stations
                                    </th>
                                    <td class="tw-border-1 tw-border-solid tw-border-gray-350 tw-p-3 tw-text-center">
                                        Unlimited
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        class="tw-min-h-[40rem] tw-w-full tw-break-words tw-rounded tw-border-1 tw-border-solid tw-border-gray-350 tw-p-6 tw-mt-4">
                        <div class="base-html-content">
                            <div class="contract">
                                <p dir="ltr"><strong>FROM:</strong> Greg Doyle (“Producer”)</p>
                                <p dir="ltr"><strong>TO:</strong> CLIENT NAME HERE (“Artist”)</p>
                                <p dir="ltr"><strong>DATE OF AGREEMENT:</strong> ORDER DATE HERE</p>
                                <p> <br> </p>
                                <ol>
                                    <li dir="ltr">In return for payment of the fee, Producer grants a non-exclusive license
                                        to
                                        the Artist to use the chosen musical work named "<strong>BEAT NAME HERE</strong>"
                                        (referred to here as “Beat”) to create one (1) new recording (“the Track”). <br>
                                        <br>
                                    </li>
                                    <li dir="ltr">The Artist shall have the right to commercially release the Track by any
                                        and
                                        all means, throughout the world, subject to these terms <br> <br> </li>
                                    <li>This license is for a term of one (1) year from the date of this agreement (“Term”).
                                        After the Term the license will automatically end and the Artist will be required to
                                        extend the term to by paying an additional fee or taking such other steps as
                                        required by
                                        the Producer. [or The term of this agreement shall be for life of copyright subject
                                        to
                                        the provisions of Para 3]. <br> <br>
                                        <ol>
                                            <li>Further during the Term the Artist’s usage of the Beat shall be limited to
                                                the
                                                following limits (“Thresholds”) <br> <br>
                                                <ol>
                                                    <li dir="ltr"> unlimited for-profit downloads or physical sales of the
                                                        Track. For the purpose of of calculating and the Threshold two
                                                        hundred
                                                        (200) streams of the Track via so-called subscription services shall
                                                        count as one sale, and <br> <br> </li>
                                                    <li dir="ltr"> unlimited free internet downloads for non-profit and
                                                        non-commercial use. <br> <br> </li>
                                                    <li dir="ltr"> four hundred (400) for-profit public performances of the
                                                        Track with a maximum profit of one thousand ($1,000) US Dollars in
                                                        compensation or ticket sales using the Track in the performances
                                                        <br>
                                                        <br>
                                                    </li>
                                                    <li dir="ltr"> four thousand (4000) non-profit public performances of
                                                        the
                                                        Track <br> <br> </li>
                                                    <li dir="ltr"> unlimited music videos for the Track <br> <br> </li>
                                                </ol>
                                            </li>
                                            <li dir="ltr"> Once any of the limits have been reached then the Artist will be
                                                required to extend the license by paying an additional fee or taking such
                                                other
                                                steps as required by the Producer. <br> <br> </li>
                                        </ol>
                                    </li>
                                    <li dir="ltr">The Artist is not required to pay the Producer a royalty or any income
                                        from
                                        the Track. <br> <br>However, despite this, the Artist agrees that;- <br> <br>
                                        <ol>
                                            <li dir="ltr">the Producer shall have a fifty percent (50%) share of the
                                                publishing
                                                in the Track and shall receive publishing income directly from the
                                                applicable
                                                Collection Society. &nbsp; <br> <br>
                                                <ol>
                                                    <li dir="ltr">The Artist agrees that he/she will register the Producer’s
                                                        interest, on the Producer’s behalf, at the collection society in the
                                                        Artist’s home territory to ensure that mechanical and performance
                                                        royalties are collected throughout the world. <a
                                                            href="https://en.wikipedia.org/wiki/List_of_copyright_collection_societies"
                                                            target="_blank"
                                                            rel="noreferrer noopener">https://en.wikipedia.org/wiki/List_of_copyright_collection_societies</a>
                                                        <br> <br>
                                                    </li>
                                                    <li dir="ltr">The Artist shall use the Producer’s membership number and
                                                        follow the directions contained in the email that shall be sent to
                                                        the
                                                        Artist by the Producer. &nbsp;[to be drafted separately] <br> <br>
                                                    </li>
                                                    <li dir="ltr">The Producer and the Artist shall each administer their
                                                        respective shares of the publishing in the Track. Any sync licenses
                                                        for
                                                        the Track must be pre-approved by the Producer <br> <br> </li>
                                                </ol>
                                            </li>
                                            <li dir="ltr">the Producer shall have the right to receive neighboring rights
                                                income
                                                as a performer on the Track directly from the applicable Collection Society.
                                                <br> <br>
                                                <ol>
                                                    <li dir="ltr">The Artist agrees that he/she will register the Producer’s
                                                        interest on the Producer’s behalf with the collection society in the
                                                        Artist’s home territory that that administers neighboring rights
                                                        income
                                                        throughout the world. <a
                                                            href="https://en.wikipedia.org/wiki/List_of_copyright_collection_societies"
                                                            target="_blank"
                                                            rel="noreferrer noopener">https://en.wikipedia.org/wiki/List_of_copyright_collection_societies</a>
                                                        <br> <br>
                                                    </li>
                                                    <li dir="ltr">The Artist shall use the Producer’s membership number and
                                                        follow the directions contained in the email that shall be sent to
                                                        the
                                                        Artist. <br> <br> </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li dir="ltr">The Producer warrants and represents the following:- <br> <br>
                                        <ol>
                                            <li dir="ltr">that they are the owner of the copyright in the Beat; <br> <br>
                                            </li>
                                            <li dir="ltr">that he/she has the right to enter into this Agreement and to
                                                grant
                                                all the rights which he &nbsp;grant herein; <br> <br> </li>
                                            <li dir="ltr">subject to the provisions of Para 9 below that the Beat does not
                                                infringe the rights of any third party; <br> <br> </li>
                                            <li dir="ltr">that all necessary consents under law are granted to the Artist
                                                <br>
                                                <br>
                                            </li>
                                            <li dir="ltr">that he/she waives any and all so called moral rights. <br> <br>
                                            </li>
                                            <li dir="ltr">all necessary publishing licenses will be made available to the
                                                Artist
                                                in respect of the Track free of charge for use by the Artist in connection
                                                with
                                                non-monetized advertising and/or promotion of the Track <br> <br> </li>
                                        </ol>
                                    </li>
                                    <li>The Artist warrants that and represents the following;- <br> <br>
                                        <ol>
                                            <li>that they have the right to enter this agreement <br> <br> </li>
                                            <li>that the Track shall not infringe the rights of any third party <br> <br>
                                            </li>
                                            <li>that they shall comply with all the obligations and limitations set out in
                                                this
                                                agreement <br> <br> </li>
                                        </ol>
                                    </li>
                                    <li>The Artist agrees to ensure that the Producer is credit on the on the metadata and
                                        packaging or promotion of the Track as follows [Produced by Lilac Rust] <br> <br>
                                    </li>
                                    <li>The Artist agrees to indemnify the Producer and hold him/her harmless from all
                                        claims,
                                        losses and expenses including reasonable legal fees arising out of &nbsp;or
                                        resulting
                                        from a claimed breach of the Artist’s warranties, representations and obligations in
                                        this agreement <br> <br> </li>
                                    <li>If in the description the Beat is stated to contain an uncleared sample then Artist
                                        agrees that they will take steps to obtain all clearances of the sample prior to
                                        release
                                        the of Track. The Artist shall also take steps to clear the publishing sample. The
                                        Artist shall indemnify the Producer from all losses and costs arising from any
                                        claims
                                        from third parties concerning the Artist’s &nbsp;failure to take the required steps.
                                        <br> <br>
                                    </li>
                                    <li>The Artist acknowledges that the Producer shall retain ownership of the copyright in
                                        master and the underlying composition the Beat and shall have the right to grant
                                        separate licenses thereof to other artists. <br> <br> </li>
                                    <li>The Artist acknowledges that the payment for this license is non refundable. If the
                                        Artist fails to comply with any obligation hereunder the Producer shall have the
                                        right
                                        on notice to the Artist to terminate this license and all rights shall revert to the
                                        Producer. Such termination shall render any further exploitation by the Artist as an
                                        actionable infringement of copyright. <br> <br> </li>
                                    <li>This rights granted to the Artist are not assignable or otherwise transferable <br>
                                        <br>
                                    </li>
                                    <li>This license constitutes the entire agreement between the parties &nbsp; <br> <br>
                                    </li>
                                    <li>This Agreement shall be construed in accordance with the law of United States. </li>
                                </ol>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    color: white;
    text-decoration: underline;
}

table,
th,
td {
    border: 1px solid white;
    border-collapse: collapse;
}


.closeButton {
    height: 6vh;
    width: 6vh;
    display: flex;
    justify-content: center;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    margin-right: 1%;
    margin-bottom: 2%;
}
</style>