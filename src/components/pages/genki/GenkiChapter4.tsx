import { GrammarInfoProps } from "../../learn/GrammarInfo";
import PageNumber from "../../../domain/learn/PageNumber";
import GenkiExampleTable from "../../ui/display/GenkiExampleTable";
import { Col, Row } from "react-bootstrap";
import GenkiTable from "../../ui/table/GenkiTable";
import GenkiComparisonDisplay from "../../ui/display/GenkiComparisonDisplay";
import React from "react";

const GenkiChapter4 = () => {
    const c4p1: GrammarInfoProps = {
        chapter: 4,
        section: 1,
        page: PageNumber.of(107, 108),
        title: "X があります / います",
        body: (
            <div>
                <p>Xがあります means “there is/there are X (non-living things).”</p>
                <p>The particle が introduces item X. You can also use あります to say that you have or own something or
                    that and event will take place.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "あそこにマクドナルドがあります。" },
                            english: { value: "There’s a McDonald’s over there." }
                        },
                        {
                            japanese: { value: "テレビがありますか。" },
                            english: { value: "Do you have a TV?" }
                        },
                        {
                            japanese: { value: "あしたはにほんごのくらすがありません。" },
                            english: { value: "There will be no Japanese class tomorrow." }
                        }
                    ]}
                />

                <p>When you want to present or some sentient being, rather than a thing, you need to use the verb います.</p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "あそこにりゅうがくせいがいます" },
                            english: { value: "There is an international student over there." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c4p2: GrammarInfoProps = {
        chapter: 4,
        section: 2,
        page: PageNumber.of(108, 109),
        title: "Describing Where Things Are",
        body: (
            <div>
                <p>You can describe where things are by using some of the location words below:</p>
                <p>The particle が introduces item X. You can also use あります to say that you have or own something or
                    that and event will take place.
                </p>

                <Row>
                    <Col>
                        <GenkiExampleTable
                            book={1}
                            values={[
                                {
                                    japanese: { value: "みぎ" },
                                    english: { value: "to the right of" }
                                },
                                {
                                    japanese: { value: "ひだり" },
                                    english: { value: "to the left of" }
                                },
                                {
                                    japanese: { value: "まえ" },
                                    english: { value: "in front of" }
                                },
                                {
                                    japanese: { value: "うしろ" },
                                    english: { value: "behind" }
                                },
                                {
                                    japanese: { value: "なか" },
                                    english: { value: "inside" }
                                }
                            ]}
                        />
                    </Col>
                    <Col>
                        <GenkiExampleTable
                            book={1}
                            values={[
                                {
                                    japanese: { value: "うえ" },
                                    english: { value: "on/above" }
                                },
                                {
                                    japanese: { value: "した" },
                                    english: { value: "under/beneath" }
                                },
                                {
                                    japanese: { value: "そば" },
                                    english: { value: "near" }
                                },
                                {
                                    japanese: { value: "となり" },
                                    english: { value: "next to" }
                                }
                            ]}
                        />
                    </Col>
                </Row>

                <p>The format is as follows:</p>

                <GenkiTable chapter={4} maxWidth={232}>
                    <tbody>
                        <tr>
                            <td>X は Y の location word です。</td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <p>The particle で is used with these words.</p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "ぎんこうはとしょかんのとなりです。" },
                            english: { value: "The bank is next to the library." }
                        },
                        {
                            japanese: { value: "わたしはハーゲンダッツのまえでメアリーさんをまちました。" },
                            english: { value: "I waited for Mary in front of the Haagen-Dazs place." }
                        },
                    ]}
                />
            </div>
        )
    }

    const c4p3: GrammarInfoProps = {
        chapter: 4,
        section: 3,
        page: PageNumber.from(110),
        title: "Past Tense of です",
        body: (
            <div>
                <p>The past tense versions of “X は Y です” sentences look like the following:</p>
                <GenkiTable chapter={4}>
                    <thead>
                        <tr>
                            <th>です</th>
                            <th>Affirmative</th>
                            <th>Negative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Present Tense</td>
                            <td>～です</td>
                            <td>～じゃありません</td>
                        </tr>
                        <tr>
                            <td>Past Tense</td>
                            <td>～でした</td>
                            <td>～じゃありませんでした</td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "やましたせんせいはとうざいだいがくのがくせいでした。" },
                            english: { value: "Mr. Yamashita was a student at Tozai University." }
                        },
                        {
                            japanese: { value: "あれはにほんのえいがじゃありませんでした。" },
                            english: { value: "That was not a Japanese film." }
                        },
                    ]}
                />
            </div>
        )
    }

    const c4p4: GrammarInfoProps = {
        chapter: 4,
        section: 4,
        page: PageNumber.from(110),
        title: "Past Tense of Verbs",
        body: (
            <div>
                <p>The past tense of verbs looks like the following, where ～ stands for the stem of a verb.</p>
                <GenkiTable chapter={4}>
                    <thead>
                        <tr>
                            <th>Verbs</th>
                            <th>Affirmative</th>
                            <th>Negative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Present Tense</td>
                            <td>～ます</td>
                            <td>～ません</td>
                        </tr>
                        <tr>
                            <td>Past Tense</td>
                            <td>～ました</td>
                            <td>～ませんでした</td>
                        </tr>
                    </tbody>
                </GenkiTable>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "メアリさんはくじごろうちにかえりました。" },
                            english: { value: "Mary returned at about nine." }
                        },
                        {
                            japanese: { value: "わたしはきのうにほんごをべんきょしませんでした。" },
                            english: { value: "I did not study Japanese yesterday." }
                        },
                    ]}
                />
            </div>
        )
    }

    const c4p5: GrammarInfoProps = {
        chapter: 4,
        section: 5,
        page: PageNumber.from(111),
        title: "も Particle",
        body: (
            <div>
                <p>も is not only used to refer to the second item which shares a common attribute with the first,
                    but it can also be used when two or more people perform the same activity. Or when someone buys,
                    sees, or eats two or more things or when you go to two places, do something on two different
                    occasions, and so forth. It is important to note that も replaces the particles は、が、or を.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "わたしはきのうきょうとにいきました。" },
                            english: { value: "I went to Kyoto yesterday." }
                        },
                        {
                            japanese: { value: "やましたせんせいもきのうきょうとにいきました。" },
                            english: { value: "Prof. Yamashita went to Kyoto yesterday too." }
                        },
                        {
                            japanese: { value: "メアリーさんはくつをかいました。" },
                            english: { value: "Mary bought shoes." }
                        },
                        {
                            japanese: { value: "メアリーさんはかばんもかいました。" },
                            english: { value: "Mary also bought a bag." }
                        },
                        {
                            japanese: { value: "ロバートさんはどようびにパーティーにいきました。" },
                            english: { value: "Robert went to a party on Saturday." }
                        },
                        {
                            japanese: { value: "にちようびにもパーティーにいきました。" },
                            english: { value: "He went to a party on Sunday too." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c4p6: GrammarInfoProps = {
        chapter: 4,
        section: 6,
        page: PageNumber.from(112),
        title: "Duration (一時間)",
        body: (
            <div>
                <p>The duration of an activity is expressed with a bare noun, like いちじかん.
                    Such nouns are not followed by particles and usually appear immediately before the verb.
                    Approximate measurements can be expressed using ぐらい after ～じかん.
                </p>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "メアリーさんはそこでたけしさんをいちじかんまちました。", underline: "いちじかん" },
                            english: { value: "Mary waited for Takeshi there for an hour." }
                        },
                        {
                            japanese: { value: "わたしはきのうにほんごをさんじかんぐらいべんきょうしました。", underline: "さんじかんぐらい" },
                            english: { value: "I studied Japanese for about three hours yesterday." }
                        }
                    ]}
                />
            </div>
        )
    }

    const c4p7: GrammarInfoProps = {
        chapter: 4,
        section: 7,
        page: PageNumber.from(112),
        title: "たくさん",
        body: (
            <div>
                <p>
                    If you want to use an expression of quantity in Japanese, the quantity word (like たくさん) can either
                    go before the noun or after the particle を.
                </p>

                <GenkiComparisonDisplay
                    book={1}
                    pre="わたしはきょうとで"
                    firstComparison={{ text: "しゃしんをたくさん", underline: "たくさん" }}
                    secondComparison={{ text: "たくさんしゃしんを", underline: "たくさん" }}
                    post="とりました。"
                    meaning="I took many pictures in Kyoto."
                />

                <GenkiComparisonDisplay
                    book={1}
                    firstComparison={{ text: "やさいをたくさん", underline: "たくさん" }}
                    secondComparison={{ text: "たくさんやさいを", underline: "たくさん" }}
                    post="たべました。"
                    meaning="I ate lots of vegetables."
                />
            </div>
        )
    }

    const c4p8: GrammarInfoProps = {
        chapter: 4,
        section: 8,
        page: PageNumber.from(113),
        title: "と Particle",
        body: (
            <div>
                <p>The particle と has two functions:</p>
                <ol>
                    <li>to connect two nouns A and B, and</li>
                    <li>to describe with whom you do something, or “together with.”</li>
                </ol>

                <GenkiExampleTable
                    book={1}
                    values={[
                        {
                            japanese: { value: "にほんごとえいごをはなします。", underline: "と" },
                            english: { value: "I speak Japanese and English." }
                        },
                        {
                            japanese: { value: "メアリーさんはスーさんとかんこくにいきます。", underline: "と" },
                            english: { value: "Mary will go to Korea with Sue." }
                        }
                    ]}
                />
            </div>
        )
    }

    return { c4p1, c4p2, c4p3, c4p4, c4p5, c4p6, c4p7, c4p8 };
}

export default GenkiChapter4;
