# test

``` java
package com.ruoyi.production.enums;

/**
 * @description: 单据触发规则对应的业务枚举
 * @author: DuanBiqiang
 * @e-mail: duanbq@zbmes.com
 * @date: 2023/04/24 10:59
 */

public enum OtherBillPropEnum {

    /**
     * 其他出库单属性
     * 说明：研发类型的其他出库单，必须选择研发项目。free1和free2字段分别存储的是研发项目编码和研发项目名称
     *
     */
    RESEARCH_AND_DEVELOPMENT("1", "研发"),
    SAMPLE("5","试样"),
    OTHER ("99", "其他");


    /**
     * 枚举值
     */
    private String value ;

    /**
     * 枚举描述
     */
    private String text ;

    public String getValue() {
        return value;
    }

    public String getText() {
        return text;
    }


    OtherBillPropEnum(String value, String text) {
        this.value = value;
        this.text = text;
    }

}

```